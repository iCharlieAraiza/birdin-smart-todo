import styled from "styled-components";

export const TaskSectionTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem !important;
  padding-top: var(--top-padding);
  svg {
    margin-left: 0.5rem;
    margin-right: 0.8rem;
    opacity: 0.8;
  }
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatusLightContainer = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const InnerLight = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: ${(props) => props.border};
`;

export const StatusLight = ({ status }) => {
  const color = {
    active: {
      solid: "#23ff08",
      outline: "#01db014a",
    },
    completed: {
      solid: "#00a1ff",
      outline: "#00a1ff36",
    },
    overdue: {
      solid: "red",
      outline: "#ff000057",
    },
  };

  const selectedColor = color[status];

  if (status === undefined) {
    return <InnerLight border="1px solid rgb(137 137 137 / 63%);" />;
  }

  return (
    <StatusLightContainer color={selectedColor.outline}>
      <InnerLight color={selectedColor.solid} />
    </StatusLightContainer>
  );
};
