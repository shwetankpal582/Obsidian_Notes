# PowerShell script to reset VS Code user settings to default and disable suggestions when typing

# Get the path to VS Code user settings.json
$settingsPath = "$env:APPDATA\Code\User\settings.json"

if (Test-Path $settingsPath) {
    # Backup existing settings.json
    $backupPath = "$env:APPDATA\Code\User\settings_backup_$(Get-Date -Format 'yyyyMMdd_HHmmss').json"
    Copy-Item -Path $settingsPath -Destination $backupPath
    Write-Output "Backed up existing settings.json to $backupPath"

    # Remove existing settings.json
    Remove-Item -Path $settingsPath
    Write-Output "Deleted existing settings.json"
} else {
    Write-Output "No existing settings.json found"
}

# Create new settings.json with editor.quickSuggestions disabled
$newSettings = @{
    "editor.quickSuggestions" = $false
} | ConvertTo-Json -Depth 10

# Write new settings to settings.json
$newSettings | Out-File -FilePath $settingsPath -Encoding utf8

Write-Output "Created new settings.json with editor.quickSuggestions disabled"
