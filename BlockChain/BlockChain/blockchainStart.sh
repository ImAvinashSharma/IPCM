alias  besu=/home/pari/besu/besu-22.10.3/bin/besu
cd node1 && besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,TXPOOL  --host-allowlist="*" --rpc-http-cors-origins="all" &
cd node2 && besu --data-path=data --genesis-file=../genesis.json --bootnodes= enode://2409e929567a693423c3d340d450d9efbf496ae45677f6d79c60ca0c5a4ee195f88a17a5f8bfeaf030b8a64f3f47bef4b329ab0c4e11dda8ef9e24959684e0a8@127.0.0.1:30303 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,TXPOOL,MINER --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546 &
cd node3 && besu --data-path=data --genesis-file=../genesis.json --bootnodes= enode://2409e929567a693423c3d340d450d9efbf496ae45677f6d79c60ca0c5a4ee195f88a17a5f8bfeaf030b8a64f3f47bef4b329ab0c4e11dda8ef9e24959684e0a8@127.0.0.1:30303 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,TXPOOL,MINER --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547 &
cd node4 && besu --data-path=data --genesis-file=../genesis.json --bootnodes= enode://2409e929567a693423c3d340d450d9efbf496ae45677f6d79c60ca0c5a4ee195f88a17a5f8bfeaf030b8a64f3f47bef4b329ab0c4e11dda8ef9e24959684e0a8@127.0.0.1:30303 --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,TXPOOL,MINER --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548 &