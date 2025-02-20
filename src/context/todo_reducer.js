export const todoReducer = (state, action) => {
  switch (action.type) {
    case "addtask":
      return { ...state, todolist: [...state.todolist, action.value] };
    case "editTask":
      const newData = state.todolist.map((item) =>
        item.id === action.value.id ? action.value : item
      );
      return { ...state, todolist: newData };
    case 'deleteTask':
      const data = state.todolist.filter((item) => item.id !== action.value.id)
      return { ...state, todolist: data };
    default:
      return state;
  }
};
