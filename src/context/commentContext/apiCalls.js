import {
  deleteCommentsStart,
  deleteCommentsSuccess,
  deleteCommentsFailure,
} from "./CommentActions";
import axios from "axios";

export const deleteComments = async (item, setLoading, dispatch) => {
  setLoading(true);
  dispatch(deleteCommentsStart());
  try {
    await axios.delete("/comments/" + item._id, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzU4YjZjOTUwMDJlYTJmZjFjYjMzZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NzIxOTM5NywiZXhwIjoxNjU3NjUxMzk3fQ.3W2vH855a0mmE_hDbgNZZFg_m7d0HPgIE4e2P3Ek6SY",
      },
    });
    dispatch(deleteCommentsSuccess(item._id));
  } catch (e) {
    dispatch(deleteCommentsFailure(e));
  }
  setLoading(false);
};
