/* eslint-disable */
const metadata = {
    fields: {
        user: {
            id: {
                name: 'id',
                type: 'String',
                isId: true,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined,
            },
            email: {
                name: 'email',
                type: 'String',
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined,
            },
            password: {
                name: 'password',
                type: 'String',
                isId: false,
                isDataModel: false,
                isArray: false,
                isOptional: false,
                attributes: [],
                backLink: undefined,
                isRelationOwner: false,
                isForeignKey: false,
                foreignKeyMapping: undefined,
            },
        },
    },
    uniqueConstraints: {
        user: {
            id: {
                name: 'id',
                fields: ['id'],
            },
            email: {
                name: 'email',
                fields: ['email'],
            },
        },
    },
    deleteCascade: {},
    authModel: 'User',
};
export default metadata;
