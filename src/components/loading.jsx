import { AiOutlineLoading } from "react-icons/ai";
import colors from "../utils/colors";

const Loading = () => {
  return (
    <div className='loading__container'>
      <AiOutlineLoading
        color={colors.accent[800]}
        size={40}
        className='loading'
      />
    </div>
  );
};

export default Loading;
