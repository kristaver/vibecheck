import { React, useState, useEffect } from 'react'
import { Dimensions, View, Text } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { readFromLocal } from '../../utils/localStorageHandler'
import { dataToChart } from '../../utils/dataToChart'

function Chart({database}) {
  // TODO: fix async loading sceen
  const [isLoading, setIsLoading] = useState(true);
  let data;
useEffect(() => {
    data = dataToChart(database);
    setIsLoading(false);
  }, [])

  if (isLoading || !data) {
    return <View><Text>Loading...</Text></View>;
  } else {
    console.log('data before render:', data)
    return (
      <View>
        <Text>{JSON.stringify(data)}</Text>
        <LineChart
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#000",
            backgroundGradientFrom: "#000",
            backgroundGradientTo: "#000",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: "1",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
          }}
        />
      </View>
    )
  }
}

export default Chart

