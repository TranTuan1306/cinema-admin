import {
  createListsFailure,
  createListsStart,
  createListsSuccess,
  deleteListsFailure,
  deleteListsStart,
  deleteListsSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
  updateListsSuccess,
} from "./ListActions";
import axios from "axios";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzIxOTM5NywiZXhwIjoxNjU3NjUxMzk3fQ.3W2vH855a0mmE_hDbgNZZFg_m7d0HPgIE4e2P3Ek6SY",
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (e) {
    dispatch(getListsFailure(e));
  }
};

export const deleteLists = async (id, dispatch) => {
  dispatch(deleteListsStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzIxOTM5NywiZXhwIjoxNjU3NjUxMzk3fQ.3W2vH855a0mmE_hDbgNZZFg_m7d0HPgIE4e2P3Ek6SY",
      },
    });
    dispatch(deleteListsSuccess(id));
  } catch (e) {
    dispatch(deleteListsFailure(e));
  }
};

export const createLists = async (list, dispatch) => {
  dispatch(createListsStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzIxOTM5NywiZXhwIjoxNjU3NjUxMzk3fQ.3W2vH855a0mmE_hDbgNZZFg_m7d0HPgIE4e2P3Ek6SY",
      },
    });
    dispatch(createListsSuccess(res.data));
  } catch (e) {
    dispatch(createListsFailure(e));
  }
};

export const updateLists = async (lists, list, dispatch) => {
  dispatch(updateListsSuccess());
  try {
    const res = await axios.put(
      "/lists/" + list._id,
      {
        title: lists.title,
        genre: lists.genre,
        type: lists.type,
        content: lists.content,
      },
      {
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzIxOTM5NywiZXhwIjoxNjU3NjUxMzk3fQ.3W2vH855a0mmE_hDbgNZZFg_m7d0HPgIE4e2P3Ek6SY",
        },
      }
    );
    dispatch(updateListsSuccess(res.data));
  } catch (e) {}
};
