declare module models {
    interface IUser {
        id?: number;
        email: string;
        password?: string;
        firstname?: string;
        lastname?: string;
    }

    interface IResponse {
        status: string;
        message?: string;
        data?: any;
        errors?: Array<Error>;
    }
    
    interface ICarouselItem {
        imageURL: string;
        heading?: string;
    }
}

declare module contexts {

    interface IRegister {
        firstname: string;
        lastname: string;
        email:string;
        username: string;
        password: string;
        error: string;
    }
    
    interface IHome {
        carouselItems: Array<models.ICarouselItem>;
    }
}

