Get-ChildItem -Path src -Recurse -Filter *.js | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Remove type imports
    $content = $content -replace ',\s*type\s+\w+', ''
    $content = $content -replace 'import\s*\{\s*type\s+\w+\s*\}', ''
    
    # Remove type annotations in function parameters
    $content = $content -replace ':\s*\w+\s*\[\]\s*([,\)])', '$1'
    $content = $content -replace ':\s*string\s*([,\)])', '$1'
    $content = $content -replace ':\s*number\s*([,\)])', '$1'
    $content = $content -replace ':\s*boolean\s*\|\s*undefined', ''
    
    # Clean up extra whitespace
    $content = $content -replace '\n\n\n+', "`n`n"
    
    Set-Content -Path $_.FullName -Value $content -NoNewline
}
Write-Host "TypeScript annotations removed from all .js files"
