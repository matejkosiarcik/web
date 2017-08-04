#
# This file is part of personal-website which is released under MIT license.
# See file LICENSE.txt or go to https://github.com/matejkosiarcik/personal-website for full license details.
#

# Specifies to ShellCheck what shell it should use for linting
# shellcheck shell=sh

# this removes excessive whitespace
# accepts 1 argument of file to format
strip() {
    printf "%s\n" "$(sed "s~\r\n~\n~" "${1}")" >"${1}"         # replace windows to unix newlines
    printf "%s\n" "$(sed "/./,\$!d" "${1}")" >"${1}"           # remove leading newlines
    printf "%s\n" "$(cat -s "${1}")" >"${1}"                   # strip multiple empty lines and trailing newlines
    printf "%s\n" "$(sed "s~[[:space:]]*\$~~" "${1}")" >"${1}" # remove trailing whitespace
}

# searches for passed command
# returns 0 if command was found, non-0 otherwise
# accepts 1 argument of command to look up
exists() {
    command -v "${1}" >/dev/null 2>&1
}

# checks if given tool exists
# print message if not
# accepts 1 argument of command to look up
# uses () instead of {} for function body because:
#  - we do not want to expose declared variables inside function
#  - and also to not override variables declared somewhere else
check() (
    exists "${1}"
    doesExist="${?}"
    if [ ! "${doesExist}" -eq "0" ]; then
        printf "%s\n" "warning: ${1} not found. (tool_not_found)"
    fi
    return "${doesExist}"
)

# helpers returning true/false
# accepts 2 arguments
#  - 1. is subject string to test, e.g. "/foo"
#  - 2. is test string, e.g. "/"
contains() { case "${1}" in *"${2}"*) true ;; *) false ;; esac; }
has_prefix() { case "${1}" in "${2}"*) true ;; *) false ;; esac; }
has_suffix() { case "${1}" in *"${2}") true ;; *) false ;; esac; }

# finds all "git" files in project
# files must match conditions:
#  - file must not be in ".git" directory
#  - file must not be ignored by command "git" when "git" is available
# prints out files that satisfy all conditions
# prints in style without leading "./"
# also works when command "git" is not found
# accepts 0 arguments
git_files() {
    find "." -type f -not -path "*.git/*" | while IFS= read -r file; do
        if exists git && git check-ignore "${file}" >/dev/null 2>&1; then continue; fi       # if git exists and ignores this file
        if has_prefix "${file}" "./"; then file="$(printf "%s\n" "${file}" | cut -c 3-)"; fi # remove leading ./ from file path
        printf "%s\n" "${file}"
    done
}

# finds all text files in project
# basically just filters out binary resources from git_files
text_files() {
    git_files | while IFS= read -r file; do
        if contains "${file}" "assets/" && ! contains "$(file "${file}")" "text"; then continue; fi
        printf "%s\n" "${file}"
    done
}

# lists shell files
shell_files() {
    find "./util" -type f -not -name "*.*" -or -name "*.sh"
}

# lists python files
python_files() {
    git_files | grep ".py\$"
}

# lists json files
json_files() {
    git_files | while IFS= read -r file; do
        if ! has_suffix "${file}" ".json"; then continue; fi
        printf "%s\n" "${file}"
    done
}
