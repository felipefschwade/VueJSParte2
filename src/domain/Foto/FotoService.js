export default class FotoService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');  
    }

    apaga(id) {
        return this._resource.delete({ id });
    }

    cadastra(foto) {
       return this._resource.save(this.foto);
    }

    lista() {
        return this._resource
            .query()
            .then(res => res.json());
    }
}