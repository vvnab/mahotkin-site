import qs from "qs";

interface IRequestOptions {
  body?: any;
  form?: any;
  query?: any;
  headers?: any;
  cors?: boolean
}

class API {
  async request(method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, {
    body,
    form,
    query,
    headers,
    cors = true
  }: IRequestOptions): Promise<any> {
    const url = path + (query ? '?' + qs.stringify(query) : '');
    headers = {
      ...headers, 
      'Accept': 'application/json'
    }
    console.log(headers);
    let response = await fetch(url, {
      method,
      headers,
      mode: cors ? "cors" : "no-cors",
      // credentials: "omit",
      body: form ? form : JSON.stringify(body)
    });
    if (response.status !== 200) {
      let error;
      try {
        const json = await response.json();
        error = json.details;
      } catch (err) {
        error = response.statusText;
      }
      throw new Error(error);
    }
    try {
      const json = await response.json();
      return json;
    } catch (err) {
      return response;
    }
  }
}

export default new API();