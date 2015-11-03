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
    interface ILogin {
        email: string;
        password: string;
        error: string;
    }

    interface IRegister {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        error: string;
        // homeView: any;
    }
    
    interface IHome {
        carouselItems: Array<models.ICarouselItem>;
    }
}

