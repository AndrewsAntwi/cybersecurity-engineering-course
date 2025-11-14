#!/usr/bin/env bash
set -e
mkdir -p keys
# Generate 3072-bit RSA private key
openssl genpkey -algorithm RSA -out keys/private.pem -pkeyopt rsa_keygen_bits:3072
# Extract public key in PEM
openssl rsa -pubout -in keys/private.pem -out keys/public.pem
# Also create a JWK (optional) for some libs — using openssl + node conversion is possible
chmod 600 keys/private.pem
echo "Keys generated in ./keys. Keep private.pem secret!"
