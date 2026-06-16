# Day 5 Git + CI Analysis

## Repository Used

Ceph

## Commit Analysis

### Commit 1

Message:
Merge pull request #69106 from bigjust/upgrade-rocksdb-7.10.2-cve-2022-23476

Analysis:
This commit upgraded RocksDB to a newer version. The purpose was to improve security and fix known issues.

### Commit 2

Message:
Merge pull request #68662 from kamoltat/wip-ksirivad-stretch-crush-experiment

Analysis:
This commit added experimental changes related to CRUSH storage behavior for testing purposes.

### Commit 3

Message:
Merge pull request #68425 from dheart-joe/pretty-kvtool-output

Analysis:
This commit improved the output format of kvtool so that users can read the results more easily.

### Commit 4

Message:
Merge pull request #67747 from indirasawant/wip-isawant-mgr-standby-details

Analysis:
This commit added more information about manager standby services.

### Commit 5

Message:
Merge pull request #69467 from kotreshhr/mirror-handle-dup-add-directory-notification

Analysis:
This commit improved directory notification handling and reduced duplicate processing.

## GitHub Actions Analysis

### check-license.yml

This workflow runs when a pull request is created. It checks whether incompatible licenses are being added to the project.

### pr-checklist.yml

This workflow runs on pull requests and verifies that contributors follow the required PR checklist.

## Observations

1. Most commits are merged through pull requests, showing a review-based workflow.

2. Branch names describe the purpose of the work, such as upgrades, experiments, and fixes.

3. GitHub Actions are used to automatically check pull requests before merging.
