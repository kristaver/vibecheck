import React from 'react'
import { Dimensions, View, Text } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

function Chart({database}) {
  const data = {
    labels: [],
    datasets: [
      {
        data: [
        ]
      }
    ]
  }

  database.forEach(entry => {
      data.labels.push(entry.time);
      data['datasets'][0]['data'].push(entry.value)
  });

  return (
    <View>
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
        decimalPlaces: 0, // optional, defaults to 2dp
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

export default Chart

