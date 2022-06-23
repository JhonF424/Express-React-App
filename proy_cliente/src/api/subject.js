import { basePath, apiVersion } from "./config";

export function newSubject(data) {
    const url = `${basePath}/${apiVersion}/subjects`;
    console.log(url);
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
            if (result.subject) {
                return {
                    subject_creado: true,
                    message: "Materia creada correctamente",
                };
            }
            return {
                subject_creado: false,
                message: result.message,
            };
        })
        .catch((err) => {
            return {
                subject_creado: false,
                message: err.message,
            };
        });
}

export function getSubjects(token) {
    const url = `${basePath}/${apiVersion}/subjects`;
    const params = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
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
export function updateSubject(token, subjet, subjetId) {
    const url = `${basePath}/${apiVersion}/update-subject/${subjetId}`;

    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(subjet),
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

export function deleteSubjet(token, subjectId) {
    const url = `${basePath}/${apiVersion}/deletesubject/${subjectId}`;

    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result.message;
        })
        .catch((err) => {
            return err.message;
        });
}