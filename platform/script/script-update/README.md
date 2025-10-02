# UpdateScript

The UpdateScript is a tool for performing batch updates on catalogues and datasets in the registry system. It reads JSON migration files and executes workflows to update, delete, or rename entities.

## JSON Structure

The UpdateScript expects a JSON file with the following structure:

```json
{
  "workflows": [
    {
      "type": "CATALOGUE|DATASET|DATASET_DELETE|DATASET_RENAME",
      "data": {
        "source": "FETCH|PARENT",
        "languages": ["en", "fr"],
        "types": ["catalogueType1", "catalogueType2"],
        "title": "Entity Title"
      },
      "operations": [
        // Nested workflows (same structure)
      ],
      "title": "New Title" // Only for DATASET_RENAME
    }
  ]
}
```

## Workflow Types

### CATALOGUE
Updates or creates catalogues.

**Required fields:**
- `type`: "CATALOGUE"
- `data.source`: "FETCH" (fetch from external source) or "PARENT" (use parent data)
- `data.languages`: Array of language codes (e.g., ["en", "fr"])
- `data.types`: Optional array of catalogue types (strings)

**Optional fields:**
- `operations`: Array of nested workflows to execute on the catalogue

### DATASET
Updates or creates datasets.

**Required fields:**
- `type`: "DATASET"
- `data.source`: "FETCH" or "PARENT"

**Optional fields:**
- `data.title`: Dataset title
- `data.types`: Array of dataset types (strings)
- `operations`: Array of nested workflows to execute on the dataset

### DATASET_DELETE
Deletes a dataset.

**Required fields:**
- `type`: "DATASET_DELETE"
- `data.source`: "FETCH" or "PARENT"

**Optional fields:**
- `data.title`: Dataset title to identify for deletion
- `data.types`: Array of dataset types (strings)

**Note:** No operations field for this type.

### DATASET_RENAME
Renames a dataset.

**Required fields:**
- `type`: "DATASET_RENAME"
- `data.source`: "FETCH" or "PARENT"
- `title`: New title for the dataset

**Optional fields:**
- `data.title`: Current dataset title
- `data.types`: Array of dataset types (strings)

**Note:** No operations field for this type.

## Nested Operations

Workflows can contain nested `operations`, which are themselves workflows. This allows for complex update hierarchies where operations on child entities can be specified within parent workflows.

## Usage

1. Create a JSON file following the structure above
2. Configure the script properties to point to your JSON file(s)
3. Run the UpdateScript

The script will validate all workflows and their operations before executing any changes.