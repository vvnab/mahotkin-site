import qs from "qs";

interface IRequestOptions {
  body?: any;
  form?: any;
  query?: Object;
  asForm?: boolean;
}

class API {
  async request(method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, {
    body,
    form,
    query
  }: IRequestOptions): Promise<any> {
    const url = path + (query ? '?' + qs.stringify(query) : '');
    let headers: any = {
      'Accept': 'application/json'
    }
    let response = await fetch(url, {
      method,
      headers,
      // credentials: 'include',
      body: form ? form : JSON.stringify(body)
    });
    if (response.status !== 200) {
      let error;
      try {
        const json = await response.json();
        error = json.details;
      } catch(err) {
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