# Antigravity 프로세스 강제 종료 및 정리 스크립트
# 이 스크립트는 업데이트 충돌을 일으키는 모든 프로세스를 종료합니다.

Write-Host "Antigravity 관련 프로세스를 정리합니다..." -ForegroundColor Cyan

# 1. Antigravity 메인 프로세스 종료
$antigravityProcesses = Get-Process | Where-Object { $_.Name -like "*Antigravity*" }
if ($antigravityProcesses) {
    Write-Host "연결된 Antigravity 프로세스들을 종료합니다..."
    $antigravityProcesses | Stop-Process -Force -ErrorAction SilentlyContinue
}

# 2. 설치 프로그램(Setup) 종료
$setupProcesses = Get-Process | Where-Object { $_.Name -like "*AntigravitySetup*" }
if ($setupProcesses) {
    Write-Host "실행 중인 설치 프로그램을 종료합니다..."
    $setupProcesses | Stop-Process -Force -ErrorAction SilentlyContinue
}

# 3. Cursor/VS Code 관련 (선택 사항)
# Write-Host "에디터를 종료하시려면 Cursor를 직접 닫아주세요."

Write-Host "정리가 완료되었습니다. 이제 다음 단계를 진행하세요:" -ForegroundColor Green
Write-Host "1. Antigravity 공식 사이트에서 최신 버전을 다시 다운로드합니다."
Write-Host "2. 다운로드한 설치 파일을 마우스 오른쪽 버튼으로 클릭한 후 '관리자 권한으로 실행'을 선택합니다."
Write-Host "3. 설치가 완료되면 에디터를 다시 시작합니다."
