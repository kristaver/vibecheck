import EStyleSheet from 'react-native-extended-stylesheet';

// Global variables
EStyleSheet.build({
  $mainSalmon: '#bf847e',
  $mainOverlay: '#f0f0f080',
  $mainGrey: '#101010',
  $mainLightGrey: 'grey',
  $mainBlack: '#010101',
  $mainWhite: '#ffffff',
});



// Front page sepecific
export default EStyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: 'auto',
    width: 'auto',
    maxWidth: 500,
    maxHeight: 1000,
  },
  heading: {
    marginTop: 40,
    color: '$mainBlack',
    fontSize: 40,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Babydoll',
  },
  main: {
    flex: 1,
    backgroundColor: '$mainOverlay',
    justifyContent: 'flex-start',
    paddingTop: 15,
    marginTop: 200
  },
  showChart: {

  },
  prompt: {
    justifyContent: 'flex-start',
    color: '$mainGrey',
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Courier New',
    marginBottom: 20,
  },
  scale: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    maxHeight: 60,
    marginBottom: 20,
  },
  icons: {
    fontSize: 50,
  },
  submitContainer: {
    grid: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // maxHeight: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  date: {
    color: '$mainLightGrey',
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'Courier New',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:100,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
});