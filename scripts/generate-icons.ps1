# Generates FatFox PNG icons (PWA maskable + any + apple-touch) from the SVG logo geometry.
# Run: powershell -ExecutionPolicy Bypass -File scripts/generate-icons.ps1
Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot "..\public"
$colors = @{ main = "#FF5733"; left = "#ED3A10"; right = "#C52D0B"; white = "#FFFFFF" }

function To-Color([string]$hex) {
    return [System.Drawing.ColorTranslator]::FromHtml($hex)
}

function New-Canvas([int]$size, [string]$bg) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    if ($bg) {
        $g.Clear((To-Color $bg))
    } else {
        $g.Clear([System.Drawing.Color]::Transparent)
    }
    return @{ Bitmap = $bmp; Graphics = $g }
}

function Draw-Fox($g, [float]$s, [float]$ox, [float]$oy) {
    function P([float]$x, [float]$y) {
        return New-Object System.Drawing.PointF(($x * $s + $ox), ($y * $s + $oy))
    }
    $main = @(
        (P 10 38), (P 14 18), (P 22 24), (P 24 14), (P 26 24),
        (P 34 18), (P 38 38), (P 32.5 41.4), (P 24 42.5), (P 15.5 41.4)
    )
    $left = @(
        (P 10 38), (P 14 18), (P 22 24), (P 17.9 26.9), (P 14.5 29.9), (P 11.9 33.4)
    )
    $right = @(
        (P 38 38), (P 34 18), (P 26 24), (P 30.1 26.9), (P 33.5 29.9), (P 36.1 33.4)
    )
    $brushMain = New-Object System.Drawing.SolidBrush((To-Color $colors.main))
    $brushLeft = New-Object System.Drawing.SolidBrush((To-Color $colors.left))
    $brushRight = New-Object System.Drawing.SolidBrush((To-Color $colors.right))
    $brushWhite = New-Object System.Drawing.SolidBrush((To-Color $colors.white))

    $g.FillPolygon($brushMain, $main)
    $g.FillPolygon($brushLeft, $left)
    $g.FillPolygon($brushRight, $right)

    # eyes
    $eyeR = 1.6 * $s
    foreach ($cx in @(20, 28)) {
        $g.FillEllipse($brushWhite, (($cx - 1.6) * $s + $ox), ((29 - 1.6) * $s + $oy), 2 * $eyeR, 2 * $eyeR)
    }

    # smile arc (center 24,31.8 r 2.33, from 31 deg sweep 118)
    $pen = New-Object System.Drawing.Pen((To-Color $colors.white), [Math]::Max(1.6 * $s, 1))
    $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
    $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
    $smile = [System.Drawing.RectangleF]::new(
        (24 - 2.33) * $s + $ox, (31.8 - 2.33) * $s + $oy,
        4.66 * $s, 4.66 * $s
    )
    $g.DrawArc($pen, $smile, 31, 118)

    $brushMain.Dispose(); $brushLeft.Dispose(); $brushRight.Dispose(); $brushWhite.Dispose(); $pen.Dispose()
}

function Save-Png($ctx, [string]$path) {
    $ctx.Graphics.Dispose()
    $ctx.Bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $ctx.Bitmap.Dispose()
}

# maskable 512 & 192: solid brand background, fox at ~75% with safe zone
foreach ($size in @(512, 192)) {
    $s = $size * 0.75 / 48.0
    $o = ($size - (48.0 * $s)) / 2.0
    $ctx = New-Canvas $size $colors.main
    Draw-Fox $ctx.Graphics $s $o $o
    Save-Png $ctx (Join-Path $outDir "icon-$size.png")
    Write-Host "Generated icon-$size.png"
}

# any (transparent) 512
$s = 512 * 0.75 / 48.0
$o = (512 - 48.0 * $s) / 2.0
$ctx = New-Canvas 512 $null
Draw-Fox $ctx.Graphics $s $o $o
Save-Png $ctx (Join-Path $outDir "icon-any-512.png")
Write-Host "Generated icon-any-512.png"

# apple-touch-icon 180: solid background, fox fills ~90%
$s = 180 * 0.9 / 48.0
$o = (180 - 48.0 * $s) / 2.0
$ctx = New-Canvas 180 $colors.main
Draw-Fox $ctx.Graphics $s $o $o
Save-Png $ctx (Join-Path $outDir "apple-touch-icon.png")
Write-Host "Generated apple-touch-icon.png"
