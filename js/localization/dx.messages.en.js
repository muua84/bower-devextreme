/*!
* DevExtreme (dx.messages.en.js)
* Version: 17.2.0 (build 17189)
* Build date: Sat Jul 08 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        factory(DevExpress.localization)
    }
}(this, function(localization) {
    localization.loadMessages({
        en: {
            Yes: "Yes",
            No: "No",
            Cancel: "Cancel",
            Clear: "Clear",
            Done: "Done",
            Loading: "Loading...",
            Select: "Select...",
            Search: "Search",
            Back: "Back",
            OK: "OK",
            "dxCollectionWidget-noDataText": "No data to display",
            "validation-required": "Required",
            "validation-required-formatted": "{0} is required",
            "validation-numeric": "Value must be a number",
            "validation-numeric-formatted": "{0} must be a number",
            "validation-range": "Value is out of range",
            "validation-range-formatted": "{0} is out of range",
            "validation-stringLength": "The length of the value is not correct",
            "validation-stringLength-formatted": "The length of {0} is not correct",
            "validation-custom": "Value is invalid",
            "validation-custom-formatted": "{0} is invalid",
            "validation-compare": "Values do not match",
            "validation-compare-formatted": "{0} does not match",
            "validation-pattern": "Value does not match pattern",
            "validation-pattern-formatted": "{0} does not match pattern",
            "validation-email": "Email is invalid",
            "validation-email-formatted": "{0} is invalid",
            "validation-mask": "Value is invalid",
            "dxLookup-searchPlaceholder": "Minimum character number: {0}",
            "dxList-pullingDownText": "Pull down to refresh...",
            "dxList-pulledDownText": "Release to refresh...",
            "dxList-refreshingText": "Refreshing...",
            "dxList-pageLoadingText": "Loading...",
            "dxList-nextButtonText": "More",
            "dxList-selectAll": "Select All",
            "dxListEditDecorator-delete": "Delete",
            "dxListEditDecorator-more": "More",
            "dxScrollView-pullingDownText": "Pull down to refresh...",
            "dxScrollView-pulledDownText": "Release to refresh...",
            "dxScrollView-refreshingText": "Refreshing...",
            "dxScrollView-reachBottomText": "Loading...",
            "dxDateBox-simulatedDataPickerTitleTime": "Select time",
            "dxDateBox-simulatedDataPickerTitleDate": "Select date",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Select date and time",
            "dxDateBox-validation-datetime": "Value must be a date or time",
            "dxFileUploader-selectFile": "Select file",
            "dxFileUploader-dropFile": "or Drop file here",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Upload",
            "dxFileUploader-uploaded": "Uploaded",
            "dxFileUploader-readyToUpload": "Ready to upload",
            "dxFileUploader-uploadFailedMessage": "Upload failed",
            "dxRangeSlider-ariaFrom": "From",
            "dxRangeSlider-ariaTill": "Till",
            "dxSwitch-onText": "ON",
            "dxSwitch-offText": "OFF",
            "dxForm-optionalMark": "optional",
            "dxForm-requiredMessage": "{0} is required",
            "dxNumberBox-invalidValueMessage": "Value must be a number",
            "dxDataGrid-columnChooserTitle": "Column Chooser",
            "dxDataGrid-columnChooserEmptyText": "Drag a column here to hide it",
            "dxDataGrid-groupContinuesMessage": "Continues on the next page",
            "dxDataGrid-groupContinuedMessage": "Continued from the previous page",
            "dxDataGrid-groupHeaderText": "Group by This Column",
            "dxDataGrid-ungroupHeaderText": "Ungroup",
            "dxDataGrid-ungroupAllText": "Ungroup All",
            "dxDataGrid-editingEditRow": "Edit",
            "dxDataGrid-editingSaveRowChanges": "Save",
            "dxDataGrid-editingCancelRowChanges": "Cancel",
            "dxDataGrid-editingDeleteRow": "Delete",
            "dxDataGrid-editingUndeleteRow": "Undelete",
            "dxDataGrid-editingConfirmDeleteMessage": "Are you sure you want to delete this record?",
            "dxDataGrid-validationCancelChanges": "Cancel changes",
            "dxDataGrid-groupPanelEmptyText": "Drag a column header here to group by that column",
            "dxDataGrid-noDataText": "No data",
            "dxDataGrid-searchPanelPlaceholder": "Search...",
            "dxDataGrid-filterRowShowAllText": "(All)",
            "dxDataGrid-filterRowResetOperationText": "Reset",
            "dxDataGrid-filterRowOperationEquals": "Equals",
            "dxDataGrid-filterRowOperationNotEquals": "Does not equal",
            "dxDataGrid-filterRowOperationLess": "Less than",
            "dxDataGrid-filterRowOperationLessOrEquals": "Less than or equal to",
            "dxDataGrid-filterRowOperationGreater": "Greater than",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Greater than or equal to",
            "dxDataGrid-filterRowOperationStartsWith": "Starts with",
            "dxDataGrid-filterRowOperationContains": "Contains",
            "dxDataGrid-filterRowOperationNotContains": "Does not contain",
            "dxDataGrid-filterRowOperationEndsWith": "Ends with",
            "dxDataGrid-filterRowOperationBetween": "Between",
            "dxDataGrid-filterRowOperationBetweenStartText": "Start",
            "dxDataGrid-filterRowOperationBetweenEndText": "End",
            "dxDataGrid-applyFilterText": "Apply filter",
            "dxDataGrid-trueText": "true",
            "dxDataGrid-falseText": "false",
            "dxDataGrid-sortingAscendingText": "Sort Ascending",
            "dxDataGrid-sortingDescendingText": "Sort Descending",
            "dxDataGrid-sortingClearText": "Clear Sorting",
            "dxDataGrid-editingSaveAllChanges": "Save changes",
            "dxDataGrid-editingCancelAllChanges": "Discard changes",
            "dxDataGrid-editingAddRow": "Add a row",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min of {1} is {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max of {1} is {0}",
            "dxDataGrid-summaryAvg": "Avg: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Avg of {1} is {0}",
            "dxDataGrid-summarySum": "Sum: {0}",
            "dxDataGrid-summarySumOtherColumn": "Sum of {1} is {0}",
            "dxDataGrid-summaryCount": "Count: {0}",
            "dxDataGrid-columnFixingFix": "Fix",
            "dxDataGrid-columnFixingUnfix": "Unfix",
            "dxDataGrid-columnFixingLeftPosition": "To the left",
            "dxDataGrid-columnFixingRightPosition": "To the right",
            "dxDataGrid-exportTo": "Export",
            "dxDataGrid-exportToExcel": "Export to Excel file",
            "dxDataGrid-excelFormat": "Excel file",
            "dxDataGrid-selectedRows": "Selected rows",
            "dxDataGrid-exportSelectedRows": "Export selected rows",
            "dxDataGrid-exportAll": "Export all data",
            "dxDataGrid-headerFilterEmptyValue": "(Blanks)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Cancel",
            "dxDataGrid-ariaColumn": "Column",
            "dxDataGrid-ariaValue": "Value",
            "dxDataGrid-ariaFilterCell": "Filter cell",
            "dxDataGrid-ariaCollapse": "Collapse",
            "dxDataGrid-ariaExpand": "Expand",
            "dxDataGrid-ariaDataGrid": "Data grid",
            "dxDataGrid-ariaSearchInGrid": "Search in data grid",
            "dxDataGrid-ariaSelectAll": "Select all",
            "dxDataGrid-ariaSelectRow": "Select row",
            "dxTreeList-ariaTreeList": "Tree list",
            "dxTreeList-editingAddRowToNode": "Add",
            "dxPager-infoText": "Page {0} of {1} ({2} items)",
            "dxPager-pagesCountText": "of",
            "dxPivotGrid-grandTotal": "Grand Total",
            "dxPivotGrid-total": "{0} Total",
            "dxPivotGrid-fieldChooserTitle": "Field Chooser",
            "dxPivotGrid-showFieldChooser": "Show Field Chooser",
            "dxPivotGrid-expandAll": "Expand All",
            "dxPivotGrid-collapseAll": "Collapse All",
            "dxPivotGrid-sortColumnBySummary": 'Sort "{0}" by This Column',
            "dxPivotGrid-sortRowBySummary": 'Sort "{0}" by This Row',
            "dxPivotGrid-removeAllSorting": "Remove All Sorting",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "Row Fields",
            "dxPivotGrid-columnFields": "Column Fields",
            "dxPivotGrid-dataFields": "Data Fields",
            "dxPivotGrid-filterFields": "Filter Fields",
            "dxPivotGrid-allFields": "All Fields",
            "dxPivotGrid-columnFieldArea": "Drop Column Fields Here",
            "dxPivotGrid-dataFieldArea": "Drop Data Fields Here",
            "dxPivotGrid-rowFieldArea": "Drop Row Fields Here",
            "dxPivotGrid-filterFieldArea": "Drop Filter Fields Here",
            "dxScheduler-editorLabelTitle": "Subject",
            "dxScheduler-editorLabelStartDate": "Start Date",
            "dxScheduler-editorLabelEndDate": "End Date",
            "dxScheduler-editorLabelDescription": "Description",
            "dxScheduler-editorLabelRecurrence": "Repeat",
            "dxScheduler-openAppointment": "Open appointment",
            "dxScheduler-recurrenceNever": "Never",
            "dxScheduler-recurrenceDaily": "Daily",
            "dxScheduler-recurrenceWeekly": "Weekly",
            "dxScheduler-recurrenceMonthly": "Monthly",
            "dxScheduler-recurrenceYearly": "Yearly",
            "dxScheduler-recurrenceEvery": "Every",
            "dxScheduler-recurrenceEnd": "End repeat",
            "dxScheduler-recurrenceAfter": "After",
            "dxScheduler-recurrenceOn": "On",
            "dxScheduler-recurrenceRepeatDaily": "day(s)",
            "dxScheduler-recurrenceRepeatWeekly": "week(s)",
            "dxScheduler-recurrenceRepeatMonthly": "month(s)",
            "dxScheduler-recurrenceRepeatYearly": "year(s)",
            "dxScheduler-switcherDay": "Day",
            "dxScheduler-switcherWeek": "Week",
            "dxScheduler-switcherWorkWeek": "Work Week",
            "dxScheduler-switcherMonth": "Month",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Timeline Day",
            "dxScheduler-switcherTimelineWeek": "Timeline Week",
            "dxScheduler-switcherTimelineWorkWeek": "Timeline Work Week",
            "dxScheduler-switcherTimelineMonth": "Timeline Month",
            "dxScheduler-recurrenceRepeatOnDate": "on date",
            "dxScheduler-recurrenceRepeatCount": "occurrence(s)",
            "dxScheduler-allDay": "All day",
            "dxScheduler-confirmRecurrenceEditMessage": "Do you want to edit only this appointment or the whole series?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Do you want to delete only this appointment or the whole series?",
            "dxScheduler-confirmRecurrenceEditSeries": "Edit series",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Delete series",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Edit appointment",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Delete appointment",
            "dxScheduler-noTimezoneTitle": "No timezone",
            "dxCalendar-todayButtonText": "Today",
            "dxCalendar-ariaWidgetName": "Calendar",
            "dxColorView-ariaRed": "Red",
            "dxColorView-ariaGreen": "Green",
            "dxColorView-ariaBlue": "Blue",
            "dxColorView-ariaAlpha": "Transparency",
            "dxColorView-ariaHex": "Color code",
            "vizExport-printingButtonText": "Print",
            "vizExport-titleMenuText": "Exporting/Printing",
            "vizExport-exportButtonText": "{0} file"
        }
    })
});
