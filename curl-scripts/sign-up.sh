curl "https://tic-tac-toe-wdi.herokuapp.com/sign-up"\
--include\
--request POST\
--data'{
  "credentials":{
    "email":"'"${EMAIL}"'",
    "Password":"'"${PASSWORD}"'"
  }
}'

echo
