import { Card, CardBody, CardFooter, CardHeader, Text } from "grommet";

function CardCustom({ header, body, footer }) {
  return (
    <Card pad="small" width="small" height="small">
      <CardHeader>
        <Text truncate={true} tip={{ content: header }}>
          {header}
        </Text>
      </CardHeader>
      <CardBody overflow="hidden">{body}</CardBody>
      <CardFooter>
        <Text truncate={true} tip={{ content: footer }}>
          {footer}
        </Text>
      </CardFooter>
    </Card>
  );
}

export default CardCustom;
