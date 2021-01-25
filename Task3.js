function pay(obj) {
    url = new URL('http://45.67.59.109:2001/order/pay');
    url.searchParams.set('id', obj.id);

    makeRequest('POST', url, obj)
        .then(data => alert(data))
        .catch(err => alert(err));
}