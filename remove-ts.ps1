Get-ChildItem -Path src -Recurse -Filter *.jsx | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Remove interface declarations
    $content = $content -replace '(?ms)interface\s+\w+\s*\{[^}]*\}', ''
    
    # Remove type declarations
    $content = $content -replace '(?ms)type\s+\w+\s*=\s*[^;]+;', ''
    
    # Remove type imports
    $content = $content -replace ',\s*type\s+\w+', ''
    $content = $content -replace 'import\s*\{\s*type\s+\w+\s*\}', ''
    
    # Remove inline type annotations
    $content = $content -replace ':\s*React\.\w+<[^>]+>', ''
    $content = $content -replace ':\s*React\.\w+', ''
    $content = $content -replace ':\s*string\s*([,\)])', '$1'
    $content = $content -replace ':\s*number\s*([,\)])', '$1'
    $content = $content -replace ':\s*boolean\s*([,\)])', '$1'
    $content = $content -replace ':\s*\w+\s*\[\]\s*([,\)])', '$1'
    $content = $content -replace ':\s*Record<[^>]+>', ''
    $content = $content -replace '\s*&\s*VariantProps<[^>]+>', ''
    $content = $content -replace '\s*&\s*\{[^}]*\}', ''
    $content = $content -replace '\?\s*:', '?:'
    
    # Clean up extra whitespace
    $content = $content -replace '\n\n\n+', "`n`n"
    
    Set-Content -Path $_.FullName -Value $content -NoNewline
}
Write-Host "TypeScript annotations removed from all .jsx files"
