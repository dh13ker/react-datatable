import {
  title,
  dimensions,
  keyColumn,
  pagination,
  font,
  refreshRows,
  isRefreshing,
  rowsGlobalEdited,
  stripped,
  orderBy,
  searchTerm,
  features
} from "./optionsObjectSample";
import textReducer from "./textReducer";

const storeNoDataSample = {
  datatableReducer: {
    title,
    text: {
      noRow: "There is no data yet, try to refresh"
    },

    dimensions,
    keyColumn,
    font,
    pagination,
    data: {
      columns: [],
      rows: []
    },
    rowsEdited: [],
    rowsGlobalEdited,
    rowsSelected: [],
    refreshRows,
    isRefreshing,
    stripped,
    orderBy,
    searchTerm,
    actions: null,
    features: {
      ...features,
      additionalIcons: []
    }
  },
  customComponentsReducer: {
    CustomTableBodyCell: null,
    CustomTableBodyRow: null,
    CustomTableHeaderCell: null,
    CustomTableHeaderRow: null,
    customDataTypes: null
  },
  notifierReducer: { notifications: [] },
  textReducer
};

export default storeNoDataSample;
