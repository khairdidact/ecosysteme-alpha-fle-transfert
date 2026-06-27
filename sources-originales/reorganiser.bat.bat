@echo off
title Réorganisation des fichiers MaClé Alpha
echo ====================================================
echo  Réorganisation des fichiers MaClé Alpha
echo ====================================================
echo.

cd /d "%~dp0"

:: 1. Renommer manuel-alphabetisation.html -> methode-macle-alpha.html
set "source1=pages\mallettes-locales\manuel-alphabetisation.html"
set "target1=pages\mallettes-locales\methode-macle-alpha.html"

if exist "%source1%" (
    echo 1. Renommage de %source1% ...
    move "%source1%" "%target1%" >nul
    if %errorlevel% equ 0 (
        echo    OK : %target1%
    ) else (
        echo    ERREUR : impossible de renommer
    )
) else (
    echo 1. Fichier introuvable : %source1% - ignoré
)

echo.

:: 2. Déplacer macle-alpha.html de employer-une-methode vers mallettes-locales et renommer
set "source2=pages\employer-une-methode\macle-alpha.html"
set "target2=pages\mallettes-locales\ressources-macle-alpha.html"

if exist "%source2%" (
    echo 2. Déplacement de %source2% ...
    move "%source2%" "%target2%" >nul
    if %errorlevel% equ 0 (
        echo    OK : %target2%
    ) else (
        echo    ERREUR : impossible de deplacer
    )
) else (
    echo 2. Fichier introuvable : %source2% - ignoré
)

echo.
echo ====================================================
echo  Operation terminee.
echo  N'oubliez pas de mettre a jour les liens HTML :
echo    - index.html (navbar)
echo    - pages/employer-une-methode/index.html
echo    - pages/mallettes-locales/index.html
echo ====================================================
pause