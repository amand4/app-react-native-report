// Report Header

export const addRep = (todo: number) => ({
  type: "ADD_REP",
  payload: todo,
});

export const addNumberOffice = (todo: number) => ({
  type: "ADD_NR-OFFICE",
  payload: todo,
});

export const addInitiated = (todo: string) => ({
  type: "ADD_INITIATED",
  payload: todo,
});

export const addTypeOfInquiry = (todo: number) => ({
  type: "ADD_TYPE-INQUIRY",
  payload: todo,
});

export const addNumberInquiry = (todo: number) => ({
  type: "ADD_NR-INQUIRY",
  payload: todo,
});

export const addCity = (todo: number) => ({
  type: "ADD_CITY",
  payload: todo,
});

export const addDirector = (todo: number) => ({
  type: "ADD_DIRECTOR",
  payload: todo,
});

export const addSection = (todo: number) => ({
  type: "ADD_SECTION",
  payload: todo,
});

export const addExpert = (todo: number) => ({
  type: "ADD_EXPERT",
  payload: todo,
});

export const addExamNature = (todo: number) => ({
  type: "ADD_EXAM-NATURE",
  payload: todo,
});

export const addDateDesignation = (todo: Date) => ({
  type: "ADD_DATE-DESIGNATION",
  payload: todo,
});

export const addDateRequest = (todo: Date) => ({
  type: "ADD_DATE-REQUEST",
  payload: todo,
});

export const addRequestingAgency = (todo: number) => ({
  type: "ADD_REQUEST-AGENCY",
  payload: todo,
});

// Vehicle Information

export const addPlate = (todo: string) => ({
  type: "ADD_PLATE",
  payload: todo,
});
export const addModel = (todo: number) => ({
  type: "ADD_MODEL",
  payload: todo,
});
export const addBrand = (todo: number) => ({
  type: "ADD_BRAND",
  payload: todo,
});
export const addYearModelFab = (todo: string) => ({
  type: "ADD_YEAR-MODEL-FAB",
  payload: todo,
});
export const addColor = (todo: string) => ({
  type: "ADD_COLOR",
  payload: todo,
});
export const addConservationState = (todo: number) => ({
  type: "ADD_CONSERVATION-STATE",
  payload: todo,
});

export const addTypePiece = (todo: string) => ({
  type: "ADD_TYPE_PIECE",
  payload: todo,
});
export const addImageGallery = (todo: {}) => ({
  type: "ADD_IMAGES",
  payload: todo,
});
export const addStatusLaudo = (todo: {}) => ({
  type: "ADD_STATUS",
  payload: todo,
});

export const addPiece = (todo: {}) => ({
  type: "ADD_PIECE",
  payload: todo,
});

export const removePiece = (todo: {}) => ({
  type: "REMOVE_PIECE",
  payload: todo,
});

export const addTypeVehicle = (todo: "") => ({
  type: "ADD_TYPE_VEHICLE",
  payload: todo,
});

export const UpdateSynchronized = (todo: {}) => ({
  type: "ADD_SYNCHRONIZED",
  payload: todo,
});

export const updateCurrentStep = (todo: {}) => ({
  type: "UPDATE_STEP",
  payload: todo,
});

export const resetState = (todo: {}) => ({
  type: "RESET",
  payload: todo,
});

export const resetDataState = (todo: {}) => ({
  type: "RESET_DATA",
  payload: todo,
});

const all = {
  addRep,
  addNumberOffice,
  addInitiated,
  addTypeOfInquiry,
  addNumberInquiry,
  addCity,
  addDirector,
  addSection,
  addExpert,
  addExamNature,
  addDateDesignation,
  addDateRequest,
  addPlate,
  addModel,
  addBrand,
  addYearModelFab,
  addColor,
  addConservationState,
  addTypePiece,
  addImageGallery,
  addStatusLaudo,
  addPiece,
  removePiece,
  addTypeVehicle,
  UpdateSynchronized,
  updateCurrentStep,
  resetState,
  resetDataState,
  addRequestingAgency,
};

export default all;
