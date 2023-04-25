async function newRequest(request) {
    let data;
    await fetch(process.env.baseUrl + '/requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({'Client_Name': request.name, 'Client_Email': request.mail, 'Client_Phone': request.phone, 'Message': request.message}),
    })
    .then(response => data = response.json());
    return data;
} 

async function fetchServices() {
    let data;
    await fetch(process.env.baseUrl + '/services', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => data = response.json());
    return data;
}

async function fetchEmployees() {
    let data;
    await fetch(process.env.baseUrl + '/employees', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => data = response.json());
    return data;
}

async function fetchProjects() {
    let data;
    await fetch(process.env.baseUrl + '/projects', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => data = response.json());
    return data;
}

async function fetchImages(id) {
    let data;
    await fetch(process.env.baseUrl + '/projects/'+id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => data = response.json());
    return data;
}

export {newRequest, fetchServices, fetchEmployees, fetchProjects, fetchImages}