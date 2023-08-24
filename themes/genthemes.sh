#!/usr/bin/env bash

set -e

if ! command -v sass &> /dev/null; then
  echo "sass must be installed globally ... npm i -g sass"
  exit
fi

declare -a themes=('bootstrap' 'bootstrap-plus' 'current' 'modern' 'init')

for theme in "${themes[@]}"; do

  echo ">>>>> generating CSS for ${theme} theme"
  echo
  sass "${theme}".scss ../src/assets/themes/"${theme}"-theme.css

  echo ">>>>> generating minified CSS for ${theme} theme"
  echo
  sass "${theme}".scss ../src/assets/themes/"${theme}"-theme.min.css --style=compressed

done
