import { React, useState, useEffect } from 'react'
import { Dimensions, View, Text } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { dataToChart } from '../../utils/dataToChart'

function Chart({database}) {
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({})

  useEffect(() => {
    setChartData(dataToChart(database))
    setIsLoading(false);
  }, [])
  

  if (isLoading) {
    return <View><Text>Loading...</Text></View>;
  } else {
    return (
      <View>
        <LineChart
          data={chartData}
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

