import mongoose from "mongoose";
export interface ICategory extends mongoose.Document {
    user: mongoose.Types.ObjectId;
    name: string;
    active: boolean;
}
export declare const Category: mongoose.Model<ICategory, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, ICategory, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ICategory & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<ICategory, mongoose.Model<ICategory, any, any, any, mongoose.Document<unknown, any, ICategory, any, mongoose.DefaultSchemaOptions> & ICategory & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any, ICategory>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ICategory, mongoose.Document<unknown, {}, ICategory, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ICategory & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, ICategory, mongoose.Document<unknown, {}, ICategory, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ICategory & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    name?: mongoose.SchemaDefinitionProperty<string, ICategory, mongoose.Document<unknown, {}, ICategory, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ICategory & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    active?: mongoose.SchemaDefinitionProperty<boolean, ICategory, mongoose.Document<unknown, {}, ICategory, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ICategory & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    user?: mongoose.SchemaDefinitionProperty<mongoose.Types.ObjectId, ICategory, mongoose.Document<unknown, {}, ICategory, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ICategory & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, ICategory>, ICategory>;
//# sourceMappingURL=category.model.d.ts.map