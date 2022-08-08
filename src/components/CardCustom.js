import { Card, CardBody, CardFooter, CardHeader, Text } from "grommet";
import styled from "styled-components";

const CardWithoutShadow = styled(Card)`
  box-shadow: none;
`;

function CardCustom({ header, body, footer }) {
  return (
    <CardWithoutShadow
      background="#181818"
      pad="small"
      width="small"
      height="small"
      gap="small"
    >
      <CardHeader>
        <Text
          weight="bold"
          truncate={true}
          tip={{ content: <Text size="small">{header}</Text> }}
        >
          {header}
        </Text>
      </CardHeader>
      <CardBody overflow="hidden">{body}</CardBody>
      <CardFooter>
        <Text
          size="small"
          truncate={true}
          tip={{ content: <Text size="small">{footer}</Text> }}
        >
          {footer}
        </Text>
      </CardFooter>
    </CardWithoutShadow>
  );
}

export default CardCustom;
