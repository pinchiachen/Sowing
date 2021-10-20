const errMessage = {
  EMPTY_FILEDS: 'All fileds are required！',
  INVALID_PARAMS: {
    username: 'Username does not conform to format！',
    password: 'Password does not conform to format！',
  },
  FAIL_REGISTER: {
    409: 'Username is already exist！',
    0: 'Something wrong, Please try again！'
  },
  FAIL_LOGIN: {
    400: 'Incorrect username or password, please try again！',
    401: 'Username is not exist！',
    0: 'Something wrong, Please try again！'
  }
};

export default errMessage;