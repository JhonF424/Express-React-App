import { basePath, apiVersion } from "./config";

export function createSubject(data) {
    const url = `${basePath}/${apiVersion}/new-subject`;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            if (result.user) {
                return {
                    message: "Asignatura creada correctamente",
                };
            }
            return {
                message: result.message,
            };
        })
        .catch((err) => {
            return {
                message: err.message,
            };
        });
}

export function getSubjects() {
    const url = `${basePath}/${apiVersion}/subjects`;
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err.message;
        });
}

export function updateSubjects(subject, subjectID) {
    const url = `${basePath}/${apiVersion}/update-subject/${subjectID}`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(subject)
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => {
            return err.message;
        });
}

export function deleteUser(subjectId) {
    const url = `${basePath}/${apiVersion}/delete-subject/${subjectId}`;

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    };

    return fetch(url, params)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result.message;
        })
        .catch(err => {
            return err.message;
        });
}