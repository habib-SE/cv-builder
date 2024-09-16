import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-2 text-inherit bg-inherit"
    >
      <IoIosArrowBack fontSize={20} />
      <p>Back</p>
    </button>
  );
}

export default BackButton;
