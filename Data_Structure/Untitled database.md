---

database-plugin: basic

---

```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    position: 0
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Date:
    input: text
    accessorKey: Date
    key: Date
    id: Date
    label: Date
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    isSorted: false
    isSortedDesc: false
    width: 168
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Topics:
    input: text
    accessorKey: Topics
    key: Topics
    id: Topics
    label: Topics
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 345
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  tags:
    input: tags
    accessorKey: tags
    key: tags
    id: tags
    label: tags
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 339
    options:
      - { label: "DataStructure", value: "DataStructure", color: "hsl(204, 95%, 90%)"}
      - { label: "Arrays", value: "Arrays", color: "hsl(224, 95%, 90%)"}
      - { label: "CollisionResolutionTechniques", value: "CollisionResolutionTechniques", color: "hsl(340, 95%, 90%)"}
      - { label: "hashing", value: "hashing", color: "hsl(67, 95%, 90%)"}
      - { label: "hashtable", value: "hashtable", color: "hsl(143, 95%, 90%)"}
      - { label: "TimeComplexity", value: "TimeComplexity", color: "hsl(232, 95%, 90%)"}
      - { label: "Recursion", value: "Recursion", color: "hsl(118, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Category:
    input: select
    accessorKey: Category
    key: Category
    id: Category
    label: Category
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: 0
    width: 131
    isSorted: true
    isSortedDesc: false
    options:
      - { label: "Array", value: "array", color: "hsl(68, 95%, 90%)"}
      - { label: "hashTable", value: "HashTable", color: "hsl(44, 95%, 90%)"}
      - { label: "SpaceAndTime", value: "SpaceAndTime", color: "hsl(15, 95%, 90%)"}
      - { label: "Recursion", value: "Recursion", color: "hsl(215, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: Category
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: /
  current_row_template: 
  pagination_size: 10
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```