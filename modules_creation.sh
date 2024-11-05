#!/bin/bash

# Ensure all required arguments are given
if [[ $# -lt 3 ]]; then
    echo "Usage: $0 <directory_path> <original_word> <replacement_word>"
    exit 1
fi

ORIGINAL_DIR="$1"
ORIGINAL_WORD="$2"
REPLACEMENT_WORD="$3"
PARENT_DIR=$(dirname "$ORIGINAL_DIR")
ORIGINAL_DIR_BASENAME=$(basename "$ORIGINAL_DIR")

# Convert strings to lowercase using `tr` for comparison
lowercased_basename=$(echo "$ORIGINAL_DIR_BASENAME" | tr 'A-Z' 'a-z')
lowercased_original_word=$(echo "$ORIGINAL_WORD" | tr 'A-Z' 'a-z')

if [[ $lowercased_basename == *$lowercased_original_word* ]]; then
    # Use `sed` for the replacement, taking advantage of its case-insensitive flag
    TARGET_DIR_BASENAME=$(echo "$ORIGINAL_DIR_BASENAME" | sed "s/$ORIGINAL_WORD/$REPLACEMENT_WORD/I")
else
    TARGET_DIR_BASENAME="$ORIGINAL_DIR_BASENAME"
fi

# Convert target directory name to lowercase
TARGET_DIR_BASENAME=$(echo "$TARGET_DIR_BASENAME" | tr 'A-Z' 'a-z')
TARGET_DIR="$PARENT_DIR/$TARGET_DIR_BASENAME"

# Copy the original directory to the target directory
cp -r "$ORIGINAL_DIR" "$TARGET_DIR"
echo "Copied directory: $ORIGINAL_DIR -> $TARGET_DIR"


# Define function to rename files and directories
rename_files_and_dirs() {
    local old="$1"
    local new="$2"

    # Recursively find and rename files first
    find "$TARGET_DIR" -type f -name "*$old*" | while IFS= read -r file; do
        newfile=$(echo "$file" | sed "s/$old/$new/g")
        if [[ "$file" != "$newfile" ]]; then
            mv "$file" "$newfile"
            echo "Renamed file: $file -> $newfile"
        fi
    done

    # Recursively find and rename directories from the deepest to the shallowest
    find "$TARGET_DIR" -type d | sort -r | while IFS= read -r dir; do
        newdir=$(echo "$dir" | sed "s/$old/$new/g")
        if [[ "$dir" != "$newdir" ]]; then
            mv "$dir" "$newdir"
            echo "Renamed directory: $dir -> $newdir"
        fi
    done
}

# Define function to replace content within files
replace_file_content() {
    local old="$1"
    local new="$2"

    # Recursively find Kotlin files and replace their content
    find "$TARGET_DIR" -type f -name "*.kt" | while IFS= read -r file; do
        if grep -q "$old" "$file"; then
            sed -i '' "s/$old/$new/g" "$file"
            echo "Replaced content in file: $file"
        fi
    done
}

# Print start message
echo "Starting renaming and content replacement process in directory: $TARGET_DIR"

# Rename files, directories, and replace content within them
rename_files_and_dirs "Catalogue" "Dataset"
rename_files_and_dirs "catalogue" "dataset"
replace_file_content "Catalogue" "Dataset"
replace_file_content "catalogue" "dataset"

# Print completion message
echo "Process completed."