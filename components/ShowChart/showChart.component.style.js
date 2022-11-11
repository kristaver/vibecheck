import EStyleSheet from 'react-native-extended-stylesheet';

const btnSize = 80;

export default EStyleSheet.create({
  placeholder: {
    height: btnSize
  },
  clickable: {  
    marginLeft: 20,
    backgroundColor: '#ffffff30',
    borderRadius: 15,
    width: btnSize,
    height: btnSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clicked: {
    backgroundColor:'red'
  },
  icon: {
    height: btnSize-15,
    width: btnSize-15,
  },
});