#!/bin/bash

API="http://localhost:4741"
URL_PATH="/customers"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "customer": {
      "firstName": "'"${FIRST}"'",
      "lastName": "'"${LAST}"'",
      "street": "'"${STREET}"'",
      "city": "'"${CITY}"'",
      "state": "'"${STATE}"'",
      "zip": "'"${ZIP}"'",
      "phone": "'"${PHONE}"'",
      "deliveryNotes": "'"${NOTES}"'",
      "paymentType": "'"${PAY}"'",
      "creditNo": "'"${CREDNO}"'",
      "creditExp": "'"${CREDEXP}"'",
      "creditCode": "'"${CREDCODE}"'",
      "creditStreet": "'"${CREDSTREET}"'",
      "creditCity": "'"${CREDCITY}"'",
      "creditState": "'"${CREDSTATE}"'",
      "creditZip": "'"${CREDZIP}"'"
    }
  }'

echo
