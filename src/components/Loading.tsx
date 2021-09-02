import { FC } from "react";
import styled from "styled-components";

interface LoadingProps {
  className?: string;
}

const LoadingContainer = styled.div`
display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 50vh;
}

`;
export const Loading: FC<LoadingProps> = ({ className }) => {
  return (
    <LoadingContainer>
      <div
        className={`spinner-border ${className || "text-primary"}`}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </LoadingContainer>
  );
};
