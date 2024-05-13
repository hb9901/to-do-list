import { Button } from "../common/Button/Button";
import "./Header.css";

export function Header() {
  return (
    <div className="header-wrapper">
      <form>
        <fieldset>
          <label>제목</label>
          <input type="text" />
          <label>내용</label>
          <input type="text" />
        </fieldset>
      </form>
      <Button borderColor={"none"} backColor={"blue"} color={"white"}>
        추가하기
      </Button>
    </div>
  );
}
