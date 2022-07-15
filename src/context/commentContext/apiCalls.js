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
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTIyMTBlYTgzY2I2N2FiYjhjNzMxYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzg4NDcwMCwiZXhwIjoxNjU4MzE2NzAwfQ.ZDyae5qHgGWgz42qbxjMnZaEh4ibkSDCw-QaTEYdFr8",
      },
    });
    dispatch(deleteCommentsSuccess(item._id));
  } catch (e) {
    dispatch(deleteCommentsFailure(e));
  }
  setLoading(false);
};
