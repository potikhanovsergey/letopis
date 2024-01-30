/* eslint-disable */
import type { Prisma, Calendar } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { RequestHandlerContext, getHooksContext } from '@zenstackhq/tanstack-query/runtime/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';

export function useCreateCalendar(
    options?: Omit<UseMutationOptions<Calendar | undefined, unknown, Prisma.CalendarCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CalendarCreateArgs, Calendar, true>(
        'Calendar',
        'POST',
        `${endpoint}/calendar/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CalendarCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CalendarCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Calendar, Prisma.CalendarGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CalendarCreateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Calendar, Prisma.CalendarGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManyCalendar(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CalendarCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CalendarCreateManyArgs, Prisma.BatchPayload, false>(
        'Calendar',
        'POST',
        `${endpoint}/calendar/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CalendarCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CalendarCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CalendarCreateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyCalendar<T extends Prisma.CalendarFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CalendarFindManyArgs>,
    options?: Omit<UseQueryOptions<Array<Prisma.CalendarGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Calendar', `${endpoint}/calendar/findMany`, args, options, fetch);
}

export function useInfiniteFindManyCalendar<T extends Prisma.CalendarFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CalendarFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<Array<Prisma.CalendarGetPayload<T>>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery('Calendar', `${endpoint}/calendar/findMany`, args, options, fetch);
}

export function useFindUniqueCalendar<T extends Prisma.CalendarFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CalendarFindUniqueArgs>,
    options?: Omit<UseQueryOptions<Prisma.CalendarGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Calendar', `${endpoint}/calendar/findUnique`, args, options, fetch);
}

export function useFindFirstCalendar<T extends Prisma.CalendarFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CalendarFindFirstArgs>,
    options?: Omit<UseQueryOptions<Prisma.CalendarGetPayload<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Calendar', `${endpoint}/calendar/findFirst`, args, options, fetch);
}

export function useUpdateCalendar(
    options?: Omit<UseMutationOptions<Calendar | undefined, unknown, Prisma.CalendarUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CalendarUpdateArgs, Calendar, true>(
        'Calendar',
        'PUT',
        `${endpoint}/calendar/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CalendarUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.CalendarUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Calendar, Prisma.CalendarGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CalendarUpdateArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Calendar, Prisma.CalendarGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyCalendar(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CalendarUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CalendarUpdateManyArgs, Prisma.BatchPayload, false>(
        'Calendar',
        'PUT',
        `${endpoint}/calendar/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CalendarUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CalendarUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CalendarUpdateManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertCalendar(
    options?: Omit<UseMutationOptions<Calendar | undefined, unknown, Prisma.CalendarUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CalendarUpsertArgs, Calendar, true>(
        'Calendar',
        'POST',
        `${endpoint}/calendar/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CalendarUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.CalendarUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Calendar, Prisma.CalendarGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CalendarUpsertArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Calendar, Prisma.CalendarGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteCalendar(
    options?: Omit<UseMutationOptions<Calendar | undefined, unknown, Prisma.CalendarDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CalendarDeleteArgs, Calendar, true>(
        'Calendar',
        'DELETE',
        `${endpoint}/calendar/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CalendarDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.CalendarDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Calendar, Prisma.CalendarGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.CalendarDeleteArgs>
                >,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Calendar, Prisma.CalendarGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyCalendar(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.CalendarDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.CalendarDeleteManyArgs, Prisma.BatchPayload, false>(
        'Calendar',
        'DELETE',
        `${endpoint}/calendar/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
    );
    const mutation = {
        ..._mutation,
        async mutateAsync<T extends Prisma.CalendarDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.CalendarDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.CalendarDeleteManyArgs>>,
                'mutationFn'
            >,
        ) {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateCalendar<T extends Prisma.CalendarAggregateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CalendarAggregateArgs>,
    options?: Omit<UseQueryOptions<Prisma.GetCalendarAggregateType<T>>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Calendar', `${endpoint}/calendar/aggregate`, args, options, fetch);
}

export function useGroupByCalendar<
    T extends Prisma.CalendarGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.CalendarGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.CalendarGroupByArgs['orderBy'] },
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
    args: Prisma.SelectSubset<T, Prisma.SubsetIntersection<T, Prisma.CalendarGroupByArgs, OrderByArg> & InputErrors>,
    options?: Omit<
        UseQueryOptions<
            {} extends InputErrors
                ? Array<
                      PickEnumerable<Prisma.CalendarGroupByOutputType, T['by']> & {
                          [P in keyof T & keyof Prisma.CalendarGroupByOutputType]: P extends '_count'
                              ? T[P] extends boolean
                                  ? number
                                  : Prisma.GetScalarType<T[P], Prisma.CalendarGroupByOutputType[P]>
                              : Prisma.GetScalarType<T[P], Prisma.CalendarGroupByOutputType[P]>;
                      }
                  >
                : InputErrors
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Calendar', `${endpoint}/calendar/groupBy`, args, options, fetch);
}

export function useCountCalendar<T extends Prisma.CalendarCountArgs>(
    args?: Prisma.SelectSubset<T, Prisma.CalendarCountArgs>,
    options?: Omit<
        UseQueryOptions<
            T extends { select: any }
                ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.CalendarCountAggregateOutputType>
                : number
        >,
        'queryKey'
    >,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery('Calendar', `${endpoint}/calendar/count`, args, options, fetch);
}
