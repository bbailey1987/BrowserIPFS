const node = new window.Ipfs();

node.on('ready', _ => {
    console.log('IPFS Ready!');
    node.files.get('QmTengyUmb1FVbDoPJDTAW3HFrDoru7FYcouSeM3QMkaLh', (err, files) => {
        console.log('FILES', files);
    });
});