export default class FotoService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}');  
    }

    apaga(id) {
        return this._resource.delete({ id })
                .then(null, err => {
                    console.log(err);
                    throw new Error("Não foi possível excluir a foto, tente novamente mais tarde");
                });
    }

    cadastra(foto) {
        if (foto._id) {
            return this._resource.update({ id : foto._id}, foto);
        }
        return this._resource.save(this.foto);
    }

    lista() {
        return this._resource
            .query()
            .then(res => res.json(),
                  err => {
                    console.log(err);
                    throw new Error('Não foi possível obter as fotos. Tenta mais tarde');
                });
    }

    buscaPorId(id) {
        return this._resource
            .get({ id })
            .then(res => res.json(), err => console.log(err));        
    }

}