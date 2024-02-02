/* eslint-disable */
import type { Prisma, Timespan } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { RequestHandlerContext, getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateTimespan(
    options?: Omit<UseMutationOptions<Timespan | undefined, unknown, Prisma.TimespanCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.TimespanCreateArgs, Timespan, true>(
        'Timespan',
        'POST',
        `${endpoint}/timespan/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TimespanCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TimespanCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Timespan, Prisma.TimespanGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TimespanCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Timespan, Prisma.TimespanGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyTimespan(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.TimespanCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.TimespanCreateManyArgs, Prisma.BatchPayload, false>(
        'Timespan',
        'POST',
        `${endpoint}/timespan/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TimespanCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TimespanCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.TimespanCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyTimespan<T extends Prisma.TimespanFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TimespanFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.TimespanGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Timespan', `${endpoint}/timespan/findMany`, args, options, fetch);
}

export function useInfiniteFindManyTimespan<T extends Prisma.TimespanFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TimespanFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.TimespanGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('Timespan', `${endpoint}/timespan/findMany`, args, options, fetch);
}

export function useFindUniqueTimespan<T extends Prisma.TimespanFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimespanFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.TimespanGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Timespan', `${endpoint}/timespan/findUnique`, args, options, fetch);
}

export function useFindFirstTimespan<T extends Prisma.TimespanFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TimespanFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.TimespanGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Timespan', `${endpoint}/timespan/findFirst`, args, options, fetch);
}

export function useUpdateTimespan(
    options?: Omit<UseMutationOptions<Timespan | undefined, unknown, Prisma.TimespanUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.TimespanUpdateArgs, Timespan, true>(
        'Timespan',
        'PUT',
        `${endpoint}/timespan/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TimespanUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.TimespanUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Timespan, Prisma.TimespanGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TimespanUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Timespan, Prisma.TimespanGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyTimespan(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.TimespanUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.TimespanUpdateManyArgs, Prisma.BatchPayload, false>(
        'Timespan',
        'PUT',
        `${endpoint}/timespan/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TimespanUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TimespanUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.TimespanUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertTimespan(
    options?: Omit<UseMutationOptions<Timespan | undefined, unknown, Prisma.TimespanUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.TimespanUpsertArgs, Timespan, true>(
        'Timespan',
        'POST',
        `${endpoint}/timespan/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TimespanUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.TimespanUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Timespan, Prisma.TimespanGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TimespanUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Timespan, Prisma.TimespanGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteTimespan(
    options?: Omit<UseMutationOptions<Timespan | undefined, unknown, Prisma.TimespanDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.TimespanDeleteArgs, Timespan, true>(
        'Timespan',
        'DELETE',
        `${endpoint}/timespan/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TimespanDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.TimespanDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Timespan, Prisma.TimespanGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.TimespanDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Timespan, Prisma.TimespanGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyTimespan(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.TimespanDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.TimespanDeleteManyArgs, Prisma.BatchPayload, false>(
        'Timespan',
        'DELETE',
        `${endpoint}/timespan/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.TimespanDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.TimespanDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.TimespanDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateTimespan<T extends Prisma.TimespanAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TimespanAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetTimespanAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Timespan', `${endpoint}/timespan/aggregate`, args, options, fetch);
}

export function useGroupByTimespan<
    T extends Prisma.TimespanGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.TimespanGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.TimespanGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
        ? {
              [P in HavingFields]: P extends ByFields
                  ? never
                  : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Prisma.Keys<T>
        ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends Prisma.True
        ? {}
        : {
              [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
>(
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.TimespanGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.TimespanGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.TimespanGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.TimespanGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.TimespanGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Timespan', `${endpoint}/timespan/groupBy`, args, options, fetch);
}

export function useCountTimespan<T extends Prisma.TimespanCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.TimespanCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TimespanCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Timespan', `${endpoint}/timespan/count`, args, options, fetch);
}
