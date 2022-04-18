import React from 'react';
import { Collapse, Row, Col, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';

// import { useGetExchangesQuery } from '../services/cryptoExchangesApi';
// import Loader from './Loader';
import obj from '../utils/exchangesobject';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  let count = 0;
  const setCount = () => {
    count += 1;
    return false;
  };
  // const { data, isFetching } = useGetExchangesQuery();

  const exchangesList = obj.slice(0, 30);
  // console.log(typeof (exchangesList));

 // Note: To access this endpoint you need premium plan
  // if (isFetching) return <Loader />;
  console.log(exchangesList);

  return (
    <>
      <Row>
        <Col span={6}>Sr. No.</Col>
        <Col span={6}>Name</Col>
        <Col span={6}>Website</Col>
        <Col span={6}>Twitter</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false || setCount(count + 1)}
                header={(
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text><strong>{count}</strong></Text>
                    </Col>
                    <Col span={6}>{exchange.name}</Col>
                    <Col span={6}>
                      <a href={exchange.website} target="_blank" rel="noopener noreferrer">
                        Click here
                      </a>
                    </Col>
                    <Col span={6}><a href={exchange.twitter} target="_blank" rel="noopener noreferrer">Click here</a></Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
